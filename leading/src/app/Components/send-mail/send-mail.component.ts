import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/Classes/message';
import { SendEmailService } from 'src/app/Services/send-email.service';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {
  title='MY-APP'

  msg:Message= new Message()
  constructor(private ser:SendEmailService) { }

  ngOnInit(): void {
    this.msg.from ="";
    this.msg.reciever ="";
    this.msg.mes ="";
    this.msg.subject ="";
  }
   sendEmail(){
  //   this.ser.send(this.msg).subscribe(x=>{
  //     Swal.fire('',"sendEmail");
  //   })
   }

}
