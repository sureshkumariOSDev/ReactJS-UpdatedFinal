import { Component } from "react";

const add = (x: number, y: number): number => {
    return (x + y);
}

type AProps = {
    data: number
}
type AState = {
    counter: number,
    name: string
}
class A extends Component<AProps, AState>{

}