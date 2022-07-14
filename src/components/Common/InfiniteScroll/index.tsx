import React from "react";

type propTypes = {
  loadMorePlacement: string;
  className?: string;
  loadMoreComponent?: any;
  onLoadEnd: any;
  offsetThreshold: number;
  useListHeightThreshold: boolean;
  useWindow?: boolean;
  id?: string;
  style?: any;
  children: React.ReactNode;
};
type defaultProps = {
  onLoadEnd: () => null;
  offsetThreshold: 100;
  loadMorePlacement: "bottom";
  useWindow: false;
  style: {
    /**/
  };
};
export default class InfiniteScroll extends React.PureComponent<propTypes, defaultProps> {
  listSelector: any = React.createRef();
  loaderSelector: any = React.createRef();
  loadMore = false;
  handleListScroll = async () => {
    if (this.props.useWindow) {
      if (
        window.innerHeight + window.scrollY >=
          document.body.scrollHeight - this.props.offsetThreshold &&
        !this.loadMore
      ) {
        this.loadMore = true;
        await this.props.onLoadEnd();
        this.loadMore = false;
      }
    } else {
      const scrollHeight = this.listSelector.current.scrollHeight || 0;

      const scrollTop = this.listSelector.current.scrollTop || 0;

      const clientHeight = this.listSelector.current.clientHeight || 0;

      const offsetThreshold = this.props.offsetThreshold || 0;

      if (this.props.loadMorePlacement === "top") {
        if (scrollHeight + scrollTop - offsetThreshold <= clientHeight) {
          this.props.onLoadEnd();
        }
      } else if (this.props.loadMorePlacement === "bottom") {
        if (scrollHeight - scrollTop - offsetThreshold <= clientHeight) {
          this.props.onLoadEnd();
        }
      }
    }
  };

  onLoadMore = this.handleListScroll;
  componentDidMount() {
    if (this.props.useWindow) this.listSelector.current = window;
    this.listSelector.current.addEventListener("scroll", this.onLoadMore);
  }
  componentWillUnmount() {
    this.listSelector.current.removeEventListener("scroll", this.onLoadMore);
  }

  render() {
    return (
      <div
        ref={this.listSelector}
        style={this.props.style}
        className={this.props.className}
        id={this.props.id}
      >
        {this.props.children}
        {!this.props.loadMoreComponent ? (
          <div ref={this.loaderSelector} className="loader-milestone" />
        ) : (
          this.props.loadMoreComponent(this.loaderSelector)
        )}
      </div>
    );
  }
}
