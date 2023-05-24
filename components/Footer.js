import { currentDayName } from '@/lib/utils/dateUtils'
import NowPlayingFooter from './NowPlayingFooter'

export default function Footer() {
  return (
    <footer>
      <div className="mt-10 flex flex-col items-center">
        <div className="">
          <NowPlayingFooter />
        </div>
        <div className="mb-2 hidden text-sm text-gray-500 dark:text-gray-400 md:flex">
          <div className="mx-1">
              Michał Grochowski{` © ${new Date().getFullYear()}`}
          </div>
          {`•`}
          <div className="mx-1">
              Have a good {currentDayName()}!
          </div>
        </div>
        <div className="mb-2 text-sm text-gray-500 dark:text-gray-400 sm:block md:hidden lg:hidden">
          <div className="mx-1">
              Michał Grochowski{` © ${new Date().getFullYear()}`} • Have a good {currentDayName()}!
          </div>
        </div>
      </div>
    </footer>
  )
}
