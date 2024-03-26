import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import ErrorPage from "pages/ErrorPage";
import { ErrorBoundary } from "react-error-boundary";

interface Props {
  children: React.ReactNode;
}

const QueryErrorBoundary = ({ children }: Props) => {
  const { reset } = useQueryErrorResetBoundary(); 

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <ErrorPage resetErrorBoundary={resetErrorBoundary}/>
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

export default QueryErrorBoundary;