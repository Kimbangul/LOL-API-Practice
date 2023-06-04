import Loading from "@/components/common/loading/LoadingStyle";

const LoadingView = () => {
  return(
    <Loading.Spinner className="spinner">
      <Loading.Bubble delay="0" className="bubble-1"></Loading.Bubble>
      <Loading.Bubble delay="-1s" className="bubble-2"></Loading.Bubble>
    </Loading.Spinner>
  )
}

export default LoadingView;
