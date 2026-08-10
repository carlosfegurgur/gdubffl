import SidebarClient from "@/components/SidebarClient/SidebarClient";

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/owners`, {
    cache: 'no-store'
  });
  const owners = await res.json();

  return (
    <SidebarClient owners={owners} />
  );
}
