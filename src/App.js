import './App.css';

function App() {
  return (
    <div className="container--form">
      <div className="container--form--box">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Mot de passe" />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

      <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-3">valider</button>
      </div>


      </div>
    </div>
  );
}

export default App;
