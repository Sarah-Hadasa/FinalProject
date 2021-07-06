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
    // this.router.params.subscribe(data=>{
    //   const myArray = this.router.snapshot.queryParamMap.get('myArray');
    //   debugger;
    //   if(myArray!=null)
    //   {this.drive = JSON.parse(myArray);
    //     this.msg.from ="leading.service.messages@gmail.com";
    // this.msg.reciever ="s053382649@gmail.com";
    // this.msg.recieverName ="";
    // this.msg.subject ="";
    //     debugger;
    //   }
    // });

    debugger;
    this.msg.reciever=this.router.snapshot.params['mail']
    this.msg.recieverName=this.router.snapshot.params['userName']
    this.msg.subject=this.router.snapshot.params['subject']
    
//   this.active.params.subscribe(data=>{
//   const myArray = this.active.snapshot.queryParamMap.get('myArray');
//   debugger;
//   if(myArray!=null)
//   {this.driveAddress = JSON.parse(myArray);‏
// }
// });
    
  }
   sendEmail(){
    this.ser.send(this.msg).subscribe(x=>{
      Swal.fire('',"sendEmail");
    })
   }

}
