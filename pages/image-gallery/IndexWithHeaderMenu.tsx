import Card from '@/components/Card'
import { images } from 'data/data'
import ImageMenu from './image-menu'
import ImageSearch from './image-search'
import ImageItem from './ImageItem'

const Page = () => {
  return (
    <>
      <Card title="image gallery" isBack={true}></Card>
      {/* <!-- Global Container --> */}
      <div className="container mx-auto flex items-center justify-center">
        {/* <!-- Card Container --> */}
        <div className="m-3 space-y-10 rounded-3xl bg-white p-6 shadow-2xl dark:bg-slate-900 dark:shadow-white md:px-4 md:pt-10">
          {/* <!-- Menu Container --> */}
          <ImageMenu />

          {/* <!-- Search Container --> */}
          <ImageSearch />
          {/* <!-- Gallery Container --> */}
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {(images || []).map((item, id) => (
              <ImageItem key={id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
