import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgeUrl, newsUrl, publishedAt, author, source } =
      this.props;

    return (
      <div className="my-3">
        <div className="col mb-3 mb-sm-0 ">
          

          <div className="card ">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:1}}>
            {source}
          </span>
            <img
              src={
                 !imgeUrl ? "https://cdn.vox-cdn.com/thumbor/TfXu13dznf7N2MASawqqdAwFMMo=/0x94:4800x2607/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24474466/GettyImages_1346335972.jpg" : imgeUrl
              }
              style={{ height: "200px" }}
              className="card-img-top"
              alt="img"
            />
            <div className="card-body shadow bg-body rounded">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">
                  By {!author ? "unknown" : author} on
                  {new Date(publishedAt).toGMTString()}
                </small>
              </p>

              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-dark"
              >
                Read More
              </a>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
