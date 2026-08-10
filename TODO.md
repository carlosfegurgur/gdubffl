# MVP TODO

Quick wins ordered by impact vs effort. Most of the logic is already built — these are mostly UI and wiring tasks.

---

## 1. Fix the Matchups Page
**Effort: Low | Impact: High**
- The `/api/matchups` route and `computeHeadToHead()` already work — nothing is wired to them
- Uncomment and rebuild `MatchupsClient.tsx` to:
  - Add two owner/team selectors (reuse the `Select` component already in `ui/Select`)
  - Call `/api/matchups?season=2025&teamA=X&teamB=Y` on selection
  - Display the head-to-head summary (wins, losses, avg margin, biggest win, closest game)
- Fix `/api/seasons` which is broken — it should return a list of available season years

---

## 2. Build a Real Home Page
**Effort: Low | Impact: High**
- Currently shows default Next.js boilerplate — needs to be replaced
- Simple dashboard showing:
  - League name + current season
  - Top 3 from power rankings (data already available from `/api/power-rankings`)
  - Link cards to Rankings, Matchups, Teams pages
- No new API work needed — just reuse existing data

---

## 3. Add Season + Week Filters to Rankings
**Effort: Low | Impact: Medium**
- `/api/power-rankings` already accepts `season` and `throughWeek` query params
- Rankings page currently hardcodes `season=2025` with no UI controls
- Add a season year dropdown and a "through week" slider/select above the table
- This makes the rankings page actually interactive and useful

---

## 4. Build the MatchupViewer Component
**Effort: Medium | Impact: High**
- `src/components/MatchupViewer.tsx` is an empty placeholder
- Build it to show a list of weekly matchup results for a selected season
- Data source: matchup JSON files are already loaded via `loadSeason()`
- Display each week's games: team names, scores, winner highlighted

---

## 5. Replace Owner Table with a Better Teams Page
**Effort: Low | Impact: Medium**
- `/teams` currently shows a dropdown + basic table of teams per owner
- Improve it: show each owner's record, total points, and seasons played
- Data for this can be derived from existing matchup data + power rankings logic

---

## 6. Wire ChartsScoreDiff to Rankings
**Effort: Low | Impact: Medium**
- `ChartsScoreDiff.tsx` is a fully built Recharts line chart that's not used anywhere
- Add it to the rankings page to visualize points for/against trends
- Could also work on the home page as a league-wide chart

---

## 7. Fix the Nav Links
**Effort: Very Low | Impact: Low**
- Navbar has links to "Dashboard", "Playoffs", and "History" that go nowhere
- Either remove the dead links or stub out placeholder pages so they don't 404

---

## Later (Post-MVP)
- Migrate power rankings + matchup data from JSON files to Prisma DB
- Team detail pages with full season history
- Playoffs bracket view
- All-time history/records page
