import React, { useState } from "react";
import "./styles.css";

let booksObj = {
  selfHelp: [
    "Atomic Habits - James Clear [4.4/5]",
    "The Rudest Book Ever - Swetabh Gangwar [3.9/5]",
    "Unlimited Power - Tony Robbins [4.2/5]",
    "7 Habits of Highly Effective People - Stephen Covey [4.2/5]"
  ],
  PersonalFinance: [
    "Money - Yuval Noah Harari [3.9/5]",
    "The Psychology of Money - Morgan Housel [4.2/5]",
    "Unshakeable - Tony Robbins [4.1/5]",
    "Romancing the Balance Sheets - Anil Lamba [4.3/5]"
  ],
  Productivity: [
    "ReWork  - Jason Fried [4.5/5]",
    "Pyjama Profit - Varun Mayya [4.3/5]",
    "Range - David Epstein [4.1/5]",
    "The Effective Executive - Peter Drucker [4.1/5]"
  ],
  MustRead: [
    "Awaken The Gient Within - Tony Robbins [4.1/5]",
    "The Subtle Art of not giving a F*ck - Mark Manson [3.9/5]",
    "How Will You Measure Your Life - Claytone Cristensen [4.5/5]",
    "Everything is F*cked Up - Mark Manson [3.7/5]"
  ]
};

export default function App() {
  const [book1, setBook1] = useState(booksObj.selfHelp[0]);
  const [book2, setBook2] = useState(booksObj.selfHelp[1]);
  const [book3, setBook3] = useState(booksObj.selfHelp[2]);
  const [book4, setBook4] = useState(booksObj.selfHelp[3]);

  function updateBooks(passedBook1, passedBook2, passedBook3, passedBook4) {
    setBook1(passedBook1);
    setBook2(passedBook2);
    setBook3(passedBook3);
    setBook4(passedBook4);
  }
  return (
    <div className="App">
      <section>
        <header>
          <h1>📚BookStacks📖</h1>
          <p>We have following book stacks for you to checkout</p>
          <nav>
            <ul className="BooksNav">
              <li
                onClick={() =>
                  updateBooks(
                    booksObj.selfHelp[0],
                    booksObj.selfHelp[1],
                    booksObj.selfHelp[2],
                    booksObj.selfHelp[3]
                  )
                }
              >
                Self Help
              </li>
              <li
                onClick={() =>
                  updateBooks(
                    booksObj.PersonalFinance[0],
                    booksObj.PersonalFinance[1],
                    booksObj.PersonalFinance[2],
                    booksObj.PersonalFinance[3]
                  )
                }
              >
                Personal Finance
              </li>
              <li
                onClick={() =>
                  updateBooks(
                    booksObj.Productivity[0],
                    booksObj.Productivity[1],
                    booksObj.Productivity[2],
                    booksObj.Productivity[3]
                  )
                }
              >
                Productivity
              </li>
              <li
                onClick={() =>
                  updateBooks(
                    booksObj.MustRead[0],
                    booksObj.MustRead[1],
                    booksObj.MustRead[2],
                    booksObj.MustRead[3]
                  )
                }
              >
                Must Read
              </li>
            </ul>
          </nav>
          <div className="hr-div">
            <hr />
          </div>
        </header>
        <main>
          <ul className="book-list">
            <li className="book1">{book1}</li>
            <li className="book2">{book2}</li>
            <li className="book3">{book3}</li>
            <li className="book4">{book4}</li>
          </ul>
        </main>
        <footer>
          <p>
            <small>Ratings Credits : Goodreads </small>
          </p>
        </footer>
      </section>
    </div>
  );
}
