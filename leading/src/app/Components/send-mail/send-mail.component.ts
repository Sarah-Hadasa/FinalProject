import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/Classes/message';
import { SendEmailService } from 'src/app/Services/send-email.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { DataDriveResults } from 'src/app/Classes/data-drive-results';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {
  title='MY-APP'
  drive:DataDriveResults= new DataDriveResults()
  msg:Message= new Message()
  constructor(private ser:SendEmailService, private router:ActivatedRoute) {
    // this.router.params.subscribe(data=>{
    //   debugger;
    //   this.msg.reciever=data[0];
    // });


   


   }

  ngOnInit(): void {
    this.router.params.subscribe(data=>{
      const myArray = this.router.snapshot.queryParamMap.get('myArray');
      debugger;
      if(myArray!=null)
      {this.drive = JSON.parse(myArray);
        this.msg.from ="leading.service.messages@gmail.com";
    this.msg.reciever ="leading.service.messages@gmail.com";
    this.msg.mes ="";
    this.msg.subject ="";
        debugger;
      }
    });

    
  }
   sendEmail(){
    this.ser.send(this.msg).subscribe(x=>{
      Swal.fire('',"sendEmail");
    })
   }

}
