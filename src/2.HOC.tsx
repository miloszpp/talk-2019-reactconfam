// HOC

import { Hello } from './1.Components';

export const withLoadingIndicator =
  <P extends {}>(Component: React.ComponentType<P>): React.ComponentType<P & { isLoading: boolean }> =>
    ({ isLoading, ...props }) =>
      isLoading
        ? <span>Loading...</span>
        // https://github.com/Microsoft/TypeScript/issues/28938#issuecomment-450636046
        : <Component {...props as P} />


const HelloWithLoading = withLoadingIndicator(Hello);

const HelloWithLoadingUsage = () => <HelloWithLoading isLoading={false} name={'John'} />

export const withCurrentDate =
  <P extends {}>(Component: React.ComponentType<P & { date: number }>): React.ComponentType<P> =>
    (props) => <Component date={Date.now()} {...props} />;


//---