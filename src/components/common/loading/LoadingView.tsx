import Loading from "@/components/common/loading/LoadingStyle";

const LoadingView = () => {
  return(
    <Loading.Container>
      <Loading.Spinner className="spinner">
        <Loading.Bubble delay="0" className="bubble-1"></Loading.Bubble>
        <Loading.Bubble delay="-1s" className="bubble-2"></Loading.Bubble>
      </Loading.Spinner>
      <Loading.Text>Loading</Loading.Text>
    </Loading.Container>
  )
}

export default LoadingView;
