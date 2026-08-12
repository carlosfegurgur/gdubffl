# Fantasy Football League History Site — Tickets

Stack: React + Next.js, deployed on Vercel
Data source: `/roster` (per-season roster JSON) + per-season matchup JSON (weekly matchups)

Status legend: `[ ] TODO` `[~] IN PROGRESS` `[x] DONE` `[!] BLOCKED`

---

## EPIC 1: Data Layer
Foundation. Nothing in Epic 2+ should read raw JSON directly once this is done.

- [x] TICKET-1.1: Audit existing JSON — document actual field names/shapes for both roster and season/matchup files (captured as TS types rather than a prose doc — see `src/lib/data-loader.server.ts`)
- [x] TICKET-1.2: Define TypeScript interfaces (`Manager`, `Season`, `Matchup`, `RosterEntry`, `Player`) — implemented as `Owner`, `SeasonFile`, `Matchup`, `FinalRoster`, `RosterPlayer` (same concepts, names adapted to existing codebase conventions)
- [x] TICKET-1.3: Write normalization/parsing layer to transform raw JSON → typed unified model — `src/lib/data-loader.server.ts` now queries Postgres (see 1.4) rather than parsing JSON directly; JSON files remain the scrape output that seeds the DB via `npm run db:import`
- [x] TICKET-1.4: Decide data access pattern — **decided: Postgres via Prisma**, not raw JSON or build-time static import as originally suggested. `scripts/scrapeNflLeague.ts` writes JSON, `scripts/importToDb.ts` loads it into Postgres (full refresh each run), and every page/API route reads through `data-loader.server.ts` → Prisma. Verified by hiding `src/data/` entirely and confirming the whole site still works.
- [~] TICKET-1.5: Build derived-stats utilities (head-to-head records, win streaks, points-for/against aggregates) on top of the unified model — head-to-head (`matchup-utils.ts`) and points-for/against + win-loss (`team-stats.ts`, `power-rankings.ts`) done and wired into real pages. **Win streaks not built yet.**

## EPIC 2: Records & Leaderboards
- [x] TICKET-2.1: Compute all-time records (most points, biggest blowout, closest matchup, longest win/loss streak) — `src/lib/records.ts`, `computeAllTimeRecords()`. Verified against raw data (e.g. closest game margin 0.03 double-checked against the source season JSON).
- [x] TICKET-2.2: Leaderboard page/component — sortable by stat — `/records`, every game flattened to one row per team (2,828 all-time), sortable on every column via the same useSortableTable pattern from the tables work. Scrollable/sticky-header container since it's ~2,800 rows unbounded.
- [x] TICKET-2.3: Season-level records view (per-year highlights) — same page, a Scope selector (All-Time + each season) recomputes both the headline cards and the leaderboard for that year via `/api/records?season=`.

## EPIC 3: Head-to-Head / Rivalries — ACTIVE
- [x] TICKET-3.1: Manager-vs-manager record lookup (all-time W-L, avg margin) — `/matchups`, all-time by default, biggest win + closest game included
- [x] TICKET-3.2: Rivalry page — select two managers, show full matchup history — same component, includes full season-by-season game log
- [ ] TICKET-3.3: "Biggest rivalry" auto-detection (most games played, closest overall record)

## EPIC 4: Season Archives
- [x] TICKET-4.1: Season list/index page — `/seasons`, sortable, champion + team count per year.
- [x] TICKET-4.2: Single-season view — standings, weekly matchups — `/seasons/[year]`: sortable standings table, week selector reusing MatchupViewer.
- [x] TICKET-4.3: Playoff bracket display per season — implemented as **derived from data, not a per-season config table**: round count/names (Quarterfinals/Semifinals/Championship Week) come from each season's actual `isPlayoff` week count, and the final week's individual games are labeled precisely (Championship, 3rd Place Game, ...) by cross-referencing each side's final standing. No hardcoded format table to maintain — verified correct against 2012 (2 rounds), 2016 (3 rounds, matches the exact structure found via live research early in this project), and 2025.

## EPIC 5: Draft History
- [!] TICKET-5.0: BLOCKED — no draft data exists yet. Needs data entry/sourcing before any sub-ticket below can start. Deprioritize this epic until data exists.
- [ ] TICKET-5.1: Source/enter draft data (format TBD — likely new JSON file per season, similar shape to roster/matchup files)
- [ ] TICKET-5.2: Draft board view per season
- [ ] TICKET-5.3: Draft hindsight/grading (value vs. actual season performance)

## EPIC 6: Awards / Trophy Room
- [ ] TICKET-6.1: Define award categories (champion, punishment recipient, worst record, etc.)
- [ ] TICKET-6.2: Trophy room page — chronological list per season
- [ ] TICKET-6.3: Manager award tally (career trophy count)

## EPIC 7: Manager Profiles
- [ ] TICKET-7.1: Manager profile page — career record, championships, rivalries, awards summary
- [ ] TICKET-7.2: Manager index/directory page

## EPIC 8: Site Shell & Polish
- [ ] TICKET-8.1: Nav structure across all sections
- [ ] TICKET-8.2: Home page — surface highlights (recent season, top record, etc.)
- [ ] TICKET-8.3: Mobile responsiveness pass
- [ ] TICKET-8.4: Deploy pipeline check (Vercel, confirm env/build settings)

---

## Open Questions
- Build order: data-layer-first (Epic 1 before all else) vs. feature-first (pick one Epic 2-7 bucket to prototype against raw JSON, generalize later) — resolved in practice as feature-first (Epics 2-4/7 work landed against JSON, then Epic 1 pivoted to Postgres underneath it without changing page code).
- Playoff format history: need exact season ranges/formats to build the per-season config (TICKET-4.3).