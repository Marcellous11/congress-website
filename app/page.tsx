import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardHeader } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuLink } from "@/components/ui/navigation-menu";

const fakeData = [
  { id: 1, name: "John Doe", position: "Software Engineer", salary: "$120,000" },
  { id: 2, name: "Jane Smith", position: "Data Scientist", salary: "$130,000" },
  { id: 3, name: "Peter Jones", position: "Project Manager", salary: "$110,000" },
  { id: 4, name: "Mary Brown", position: "UX Designer", salary: "$100,000" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 sm:p-20">
      {/* Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuLink href="/" >Home</NavigationMenuLink>
        <NavigationMenuLink href="/congressmen" >Congressmen</NavigationMenuLink>
        <NavigationMenuLink href="/state" >State</NavigationMenuLink>
        <NavigationMenuLink href="/payments" >Payments</NavigationMenuLink>
      </NavigationMenu>

      {/* New Header Section */}
      <Card>
        <CardHeader className="bg-gray-100 p-4 text-gray-800">
          <h2 className="text-2xl font-bold">Team Overview</h2>
          <p className="text-gray-600 mt-2">Quick view of our team members and their roles.</p>
        </CardHeader>
      </Card>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Congress Website</h1>
        <p className="text-gray-600 mt-4">Explore the data and insights about our team members.</p>
      </header>

      <main className="w-full max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Salary</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fakeData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.position}</TableCell>
                <TableCell>{row.salary}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>

      <footer className="text-center mt-12 text-gray-600">
        <p>&copy; 2025 Congress Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

