import { siteData, navigation } from '@/lib/data'

export default function CalendarPage() {
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
      <div className="container py-8">
        <div className="card p-8 max-w-4xl mx-auto border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Task Calendar</h2>
          <p className="text-gray-600 text-lg leading-relaxed">View tasks in calendar format</p>
          <div className="mt-6">
            <button className="btn btn-primary mr-4">Learn More</button>
            <button className="btn btn-secondary">Contact Us</button>
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