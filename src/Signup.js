import React from "react";
import { useState } from "react";
import DateTimePicker from "react-datetime-picker";

export default function Signup() {
  const [title, setTitle] = useState("");
  const [auther, setAuther] = useState("auther");
  const [description, setDescription] = useState("description");
  const [date, setDate] = useState(new Date());

  return (
    <form action="/info">
      <label>
        Title{" "}
        <input
          type="text"
          placeholder="Enter blog name"
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br></br>
      <br></br>

      <label>
        Auther{" "}
        <input
          type="text"
          placeholder="Enter Auther name"
          onChange={(e) => setAuther(e.target.value)}
        />
      </label>
      <br></br>
      <br></br>

      <label for="blog-description">
        Description{" "}
        <textarea
          name="blog-description"
          rows="4"
          cols="50"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </label>
      <br></br>
      <br></br>
      <label>
        Date
        <DateTimePicker onChange={setDate} value={date} />
      </label>
      <br></br>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}
