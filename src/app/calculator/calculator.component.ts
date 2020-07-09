import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  firstOperator: number;
  secondOperator: number;
  operand: string;
  result: number;
  constructor() { }

  ngOnInit(): void {
  }
  onChangeFirstOperator(value): void{
    this.firstOperator = value;
  }
  onChangeSecondOperator(value): void{
    this.secondOperator = value;
  }
  onChangeOperand(value): void{
    this.operand = value;
  }
  onClickCalculate(): void{
    switch (this.operand) {
      case '+':
        this.result = this.firstOperator + this.secondOperator;
        break;
      case '-':
        this.result = this.firstOperator - this.secondOperator;
        break;
      case '*':
        this.result = this.firstOperator * this.secondOperator;
        break;
      case '/':
        this.result = this.firstOperator / this.secondOperator;
        break;
    }
  }
}
