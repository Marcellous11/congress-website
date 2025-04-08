import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 38,
      status: "pending",
      email: "that@example.com",
    },
    {
      id: "728ed52f",
      amount: 77,
      status: "pending",
      email: "you@example.com",
    },
    {
      id: "728ed52f",
      amount: 45,
      status: "pending",
      email: "myemail@example.com",
    },
    {
      id: "728ed52f",
      amount: 3,
      status: "pending",
      email: "gross@example.com",
    },
    {
      id: "728ed52f",
      amount: 1234,
      status: "pending",
      email: "zinger@example.com",
    },
    {
      id: "728ed52f",
      amount: 54,
      status: "pending",
      email: "allmebro@example.com",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
