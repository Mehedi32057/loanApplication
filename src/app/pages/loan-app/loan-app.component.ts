import { Component, inject } from '@angular/core';
import { ApiResponseModel, Application, Loan } from '../../model/application';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-loan-app',
  templateUrl: './loan-app.component.html',
  styleUrl: './loan-app.component.css'
})
export class LoanAppComponent {
  application: Application = new Application();
  loan: Loan = new Loan();
  mastersrv = inject(MasterService);

  addLoan() {
    const newLoan = { ...this.loan }; // Clone the loan object
    this.application.Loans.unshift(newLoan);
    this.loan = new Loan(); // Reset loan form
  }

  onSubmit() {
    this.mastersrv.addNewApplication(this.application).subscribe({
      next: (result: ApiResponseModel) => {
        if (result.result) {
          alert("Loan Application Success");
        } else {
          alert(result.message);
        }
      },
      error: (err) => {
        alert("An error occurred: " + err);
      }
    });
  }
}
