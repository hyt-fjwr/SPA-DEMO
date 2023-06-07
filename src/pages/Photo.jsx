import React from 'react'

const Photo = () => {
  return (
    <div className='flex justify-center mt-5'>
      <div className='md:w-2/5 lg:max-w-lg w-2/4'>
        <a data-flickr-embed="true" title="asakusa"><img src="https://live.staticflickr.com/65535/52610710948_45c55b189e_c.jpg" width="534" height="800" alt="asakusa"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
      </div>
    </div>
  )
}

export default Photo
