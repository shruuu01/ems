import { Building2Icon, FileTextIcon, UsersIcon, CalendarIcon } from 'lucide-react'
import React from 'react'

const AdminDashboard = ({data}) => {

    const stats = [
        {
            icon: UsersIcon,
            value: data.totalEmployees,
            label: "Total Employees",
            description: "Active workflow",
        },
        {
            icon: Building2Icon,
            value: data.totalDepartments,
            label: "Departments",
            description: "Organization units",
        },
        {
            icon: CalendarIcon,
            value: data.todayAttendance,
            label: "Today's Attendance",
            description: "Checked in today",
        },
        {
            icon: FileTextIcon,
            value: data.pendingLeaves,
            label: "Pending Leaves",
            description: "Awaiting approval",
        },
    ]

  return (
     <div className='animate-fade-in'>
        <div className='page-header'>
            <h1 className='page-title'>Dashboard</h1>
            <p className='page-subtitle'>
                Welcome back, Admin - here's your overview
            </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
            {stats.map((s)=>(
                <div key={s.label} className='card card-hover p-4 relative overflow-hidden group flex items-center justify-between'>
                    <div>
                        <div className='absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-slate-500/70 group-hover:bg-indigo-500/70'/>
                        <p className='text-[13px] font-medium text-slate-700'>{s.label}</p>
                        <p className='text-xl font-bold text-slate-900 mt-0.5'>{s.value}</p>
                    </div>
                    <s.icon className='size-9 p-2 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors duration-200' />
                </div>
            ))}
        </div>

        
    </div>
  )
}

export default AdminDashboard