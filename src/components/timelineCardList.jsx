import React, { Component } from "react";
import TimelineCard from "./timelineCard";

class TimelineCardList extends Component {
  state = {
    cards: [
      { id: 1, title: "Day 1: Hello World" },
      { id: 2, title: "Day 2: 1.. 2.. React" },
      { id: 3, title: "Day 3: First Prototype" },
      { id: 4, title: "Day 4: Wait Time" }
    ]
  };

  render() {
    return this.state.cards.map(c => <TimelineCard key={c.id} card={c} />);
  }
}

export default TimelineCardList;
