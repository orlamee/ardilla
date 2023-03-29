
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const fileTypes = ["JPG", "PNG", "GIF"];
const videoTypes = ["MP4"];


function StartSharing() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <section className="startsharing">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} label="Upload a piiture not more than 5MB of you to feature on your story" />
          </div>
          <div className="col-md-6">
            <FileUploader handleChange={handleChange} name="file" types={videoTypes} label="Upload a 2minutes video of you speaking about your testimonial"/>
          </div>
        </div>
      <div className="row mt-5">
        <div className="col">
          <Form>
            <Form.Group className="mb-4" controlId="">
              <Form.Label>What is your name</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer here"/>
            </Form.Group>
            <Form.Group className="mb-4" controlId="">
              <Form.Label>How did you find out about Ardilla and how long have you been using the app?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer here"/>
            </Form.Group>
            <Form.Group className="mb-4" controlId="">
              <Form.Label>How did you find out about Ardilla and how long have you been using the app?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer here"/>
            </Form.Group>
            <Form.Group className="mb-4" controlId="">
              <Form.Label>How did you find out about Ardilla and how long have you been using the app?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer here"/>
            </Form.Group>
            <Form.Group className="mb-4" controlId="">
              <Form.Label>How did you find out about Ardilla and how long have you been using the app?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer here"/>
            </Form.Group>
            <Form.Group className="mb-5" controlId="">
              <Form.Label>How did you find out about Ardilla and how long have you been using the app?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Answer here"/>
            </Form.Group>
            <div className="text-center">
              <Button className='btn btn-outline-primary px-5 py-3 ardilla-btn fs-6 text-dark' to="/start-sharing">Post Reply</Button>
            </div>
          </Form>
        </div>
      </div>
      </div>
    </section>
  );
}

export default StartSharing;
