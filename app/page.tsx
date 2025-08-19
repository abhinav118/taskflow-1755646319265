import { siteData, navigation } from '@/lib/data'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">{siteData?.settings?.appName || 'TaskFlow'}</h1>
            <div className="flex space-x-6">
              {[{"label":"Dashboard","route":"/","icon":"dashboard","active":true},{"label":"All Tasks","route":"/tasks","icon":"tasks","badge":"6"},{"label":"Projects","route":"/projects","icon":"folder"},{"label":"Calendar","route":"/calendar","icon":"calendar"},{"label":"Settings","route":"/settings","icon":"settings"}].map((item: any, index: number) => (
                <a key={index} href={item.route} className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome back!</h1>
          <p className="text-xl opacity-90">Here's what you have on your plate today</p>
          <button className="mt-8 btn btn-primary bg-white text-blue-600 hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </div>

      <div className="container py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Your Tasks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.tasks?.map((task: any, index: number) => (
            <div key={index} className="card p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  task.status === 'completed' ? 'bg-green-100 text-green-800' :
                  task.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {task.status}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{task.description}</p>
              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${
                  task.priority === 'high' ? 'text-red-600' :
                  task.priority === 'medium' ? 'text-yellow-600' :
                  'text-green-600'
                }`}>
                  {task.priority} priority
                </span>
                <button className="btn btn-secondary text-sm">
                  View Details
                </button>
              </div>
            </div>
          )) || []}
        </div>
      </div>

      <div className="container py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Weekly Progress</h2>
        <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-sm">
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <p className="text-gray-600">Chart visualization would be rendered here</p>
              <p className="text-sm text-gray-500 mt-2">Using data from: {siteData?.settings?.appName}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container text-center">
          <p>&copy; 2024 {siteData?.settings?.appName || 'TaskFlow'}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}