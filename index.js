var services=document.getElementById('Services')
var original_content=`            

<div class="icon"><i class="bi bi-laptop"></i></div>
<h4 class="title"><a href="">Title</a></h4>
<p class="description">
 Description
</p>
</div>`
var intersteds=document.getElementById('Intersted')
var org_content=`
<div class="icon"><i class="bi bi-clipboard-heart"></i></div>
<h4 class="title"><a href="">Hobbies</a></h4>
<p class="description">
 Descriptions
</p>
</div>
`
fetch(' https://radiant-springs-76444.herokuapp.com/')
  .then(response => response.json())
  .then(json => {
    json.Sheet1.forEach(element => {
        var content=original_content;
        content=content.replace('Title',element.A)
        content=content.replace('Description',element.B)
        
       
        var service=document.createElement('div');
        service.innerHTML=content;
        service.className="col-lg-4 col-md-6 icon-box";
        services.appendChild(service);
    });
    json.Sheet2.forEach(element=>{
        var content=org_content;
        content=content.replace('Hobbies',element.A)
        content=content.replace('Descriptions',element.B)
        var hob=document.createElement('div');
        hob.innerHTML=content;
        hob.className="col-lg-4 col-md-6 icon-box";
        intersteds.appendChild(hob);


    })



  }
  
  )
