import React from 'react'
import Button from "../../components/ui/button"

export default function CategoriesPage() {
  const categories = [
    "Action", "Comedy", "Drama", "Sci-Fi", "Horror", "Romance"
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Choose a Category</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <Button 
          label={category}
          onClick={() => alert(category)} 
          className="text-xl p-6 h-auto"
        />
        ))}
      </div>
    </div>
  )
}