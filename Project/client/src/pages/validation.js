export default function validation(values) {
  console.log("In validation",values)
    // let letters = /^[A-Za-z]+$/;
    let letters = /^([A-zÀ-ž\s])+$/;
    let error = {};
    if (!values.title) {
      error.title = "Title Required";
    }
    else if (!values.title.match(letters)) {
      error.title = "Title must only string";
    }
    else if (!values.description) {
      error.description = "Course Required";
    }
    else if (!values.description.match(letters)) {
      error.description = "course must only string";
    }
    else if (!values.time) {
      error.time = "Time Required";
    }
    else if (!values.paid) {
      error.paid = "Mode Required";
    }
    return error;
  }