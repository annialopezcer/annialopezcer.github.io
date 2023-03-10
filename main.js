let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#ff7b9f;">Desarrollo sitios web, escribo artículos sobre literatura y soy gestora cultural.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
