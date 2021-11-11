import { NextPage } from 'next'

type Props = {
  statusCode?: number
}

const PageError: NextPage<Props> = ({ statusCode }) => {
  if (statusCode === 404) {
    return <h1 className="text-center">404 Not Found</h1>
  } else {
    return (
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }
}

PageError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default PageError
