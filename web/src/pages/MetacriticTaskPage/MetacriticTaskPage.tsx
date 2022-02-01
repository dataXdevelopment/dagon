import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MetacriticTaskPage = () => {
  return (
    <>
      <MetaTags title="MetacriticTask" description="MetacriticTask page" />

      <h1>MetacriticTaskPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/MetacriticTaskPage/MetacriticTaskPage.tsx</code>
      </p>
      <p>
        My default route is named <code>metacriticTask</code>, link to me with `
        <Link to={routes.metacriticTask()}>MetacriticTask</Link>`
      </p>
    </>
  )
}

export default MetacriticTaskPage
