function ContentHeader(props) {
  let name = props.title;
  let firstname = name?.split(" ")[0];
  return (
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0"> Welcome {firstname}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentHeader;
