import React from 'react';

export interface HelloProps {
  name: string;
}

// Components

// export const Hello = (props: any) =>
//     <h1>Hello {props.name}</h1>;

export const Hello: React.FunctionComponent<HelloProps> = (props) =>
  <h1>Hello {props.name}</h1>;

export class HelloComponent extends React.Component<HelloProps> {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

// Events

export const Counter: React.FunctionComponent = () => {
  const [counter, setCounter] = React.useState<number |
   undefined>();
  return (<div>
    Counter: {counter}
    <button onClick={
        (event: React.MouseEvent<HTMLButtonElement>) => 
          setCounter(counter)}>
      Increase
    </button>
  </div>);
}

// Default props

export interface CustomerProps {
  name: string;
  birthYear?: number;
}

export const Customer: React.FunctionComponent<CustomerProps> = ({ name, birthYear = 2000 }) =>
  <h1>Customer: {name}; born: {birthYear}</h1>;

interface CounterState {
  value: number;
}

interface CounterProps {
  increment: number;
}

export class CCounter extends React.Component<CounterProps, CounterState> {
  render() {
    // Readonly<CounterState>
    this.state
    // Readonly<CounterProps> & Readonly<{ children?: React.ReactNode; }>  
    this.props
    return <div></div>;
  }
}