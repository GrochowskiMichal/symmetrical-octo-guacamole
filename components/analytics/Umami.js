import Script from 'next/script'

import siteMetadata from '@/data/siteMetadata'

const UmamiScript = () => {
  return (
    <>
      <Script
        async
        defer
        data-website-id={siteMetadata.analytics.umamiWebsiteId}
        src="https://analytics.umami.is/websites/ca032a55-04a7-46af-b1b9-a01da4cd255e" // Replace with your umami instance
      />
    </>
  )
}

export default UmamiScript
