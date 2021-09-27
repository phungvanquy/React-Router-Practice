import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

import LoadingSpinner from "../components/ui/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  if (status === "completed" && (loadedQuotes.length === 0 || !loadedQuotes)) {
    return <NoQuotesFound />;
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  return <QuoteList quotes={loadedQuotes}></QuoteList>;
};

export default AllQuotes;
