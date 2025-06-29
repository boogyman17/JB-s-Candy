// src/app/dashboard/page.tsx
import SalesBarChart from "@/components/ui/SalesBarChart";
import AddProductForm from "@/components/ui/AddProductForm";

export default function DashboardPage() {
  return (
    <main className="p-6 space-y-8 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-gray-500">Total Page Views</p>
          <p className="mt-2 text-3xl font-bold">442,236</p>
          <span className="inline-flex items-center text-green-600 text-sm">
            ↑ 59.3%
          </span>
          <p className="mt-1 text-gray-500 text-sm">
            You made an extra 35,000 this year
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-gray-500">Total Users</p>
          <p className="mt-2 text-3xl font-bold">78,250</p>
          <span className="inline-flex items-center text-green-600 text-sm">
            ↑ 70.5%
          </span>
          <p className="mt-1 text-gray-500 text-sm">
            You made an extra 8,900 this year
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-gray-500">Total Orders</p>
          <p className="mt-2 text-3xl font-bold">18,800</p>
          <span className="inline-flex items-center text-yellow-500 text-sm">
            ↘ 27.4%
          </span>
          <p className="mt-1 text-gray-500 text-sm">
            You made an extra 1,943 this year
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-gray-500">Total Sales</p>
          <p className="mt-2 text-3xl font-bold">$35,078</p>
          <span className="inline-flex items-center text-yellow-500 text-sm">
            ↘ 12.1%
          </span>
          <p className="mt-1 text-gray-500 text-sm">
            You made an extra $20,395 this year
          </p>
        </div>
      </div>

      {/* Live‐Updating Horizontal Bar Chart */}
      <section className="bg-white p-6 rounded-lg shadow">
        <SalesBarChart />
      </section>

      {/* Add New Product Form */}
      <section className="bg-white p-6 rounded-lg shadow">
        <AddProductForm />
      </section>
    </main>
  );
}
