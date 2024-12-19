"use client"

import { DatasetFilterSidebar } from "@/components/DatasetFilterSidebar"
import { Input } from "@/components/ui/input"
import { Database, Star } from "lucide-react"

const DatasetMiniCard = () => {
  return (
    <div className="p-2 flex flex-col border border-b-gray-200 m-2 rounded-md">
      <div className="flex items-center">
        <Database className="w-4 h-4 mr-1 text-gray-500" />
        <div className="text-sm text-gray-700">seveibar/keyboard</div>
      </div>
      <div className="flex text-xs mt-1 items-center">
        <div className="text-gray-500">1,000+ Samples</div>
        <div className="bg-gray-300 rounded-xl w-1 h-1 ml-1 mr-1" />
        <div className="text-gray-500">Updated 10 days ago</div>
        <div className="bg-gray-300 rounded-xl w-1 h-1 ml-1 mr-1" />
        <div className="text-gray-500 flex items-center">
          <Star className="w-2 h-2 mr-0.5" />5
        </div>
      </div>
    </div>
  )
}

export default function DatasetsPage() {
  return (
    <div className="flex">
      <DatasetFilterSidebar />
      <div className="flex flex-col flex-grow">
        <div className="p-4 flex items-center justify-center">
          <h1 className="text-md">
            Datasets <span className="text-gray-500">3</span>
          </h1>
          <div className="flex-grow" />
          <Input className="max-w-64" placeholder="Search datasets" />
        </div>
        <DatasetMiniCard />
      </div>
    </div>
  )
}
