export default async function videoboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen mt-10">
      {/* Page content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
