import React from 'react'

const Page = () => {
  return (
    <div>
      I am ABout page
    </div>
  )
}

export default Page


// or Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: 'About-Page',
  }
}
