import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  authForm: FormGroup;

  configs = {
    isSignIn: true,
    action: 'Entrar',
    actionChange: 'Cadastrar-se'
  };

  private nameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private ovelayService: OverlayService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  get nome(): FormControl {
    return this.authForm.get('nome') as FormControl;
  }

  get email(): FormControl {
    return this.authForm.get('email') as FormControl;
  }

  get senha(): FormControl {
    return this.authForm.get('senha') as FormControl;
  }

  changeAuthAction(): void {
    this.configs.isSignIn = !this.configs.isSignIn;
    const { isSignIn } = this.configs;
    this.configs.action = isSignIn ? 'Entrar' : 'Cadastrar-se';
    this.configs.actionChange = isSignIn
      ? 'Cadastrar-se'
      : 'Já tenho uma conta';
    !isSignIn
      ? this.authForm.addControl('nome', this.nameControl)
      : this.authForm.removeControl('nome');
  }

  async onSubmit(): Promise<void> {
    const loading = await this.ovelayService.loading();
    try {
      const credenciais = await this.authService.autenticar({
        isSignIn: this.configs.isSignIn,
        user: this.authForm.value
      });
      this.navCtrl.navigateForward(this.route.snapshot.queryParamMap.get('redirect') || '/oportunidades');
    } catch (e) {
      console.log(`Erro de autenticação: ${e}`);
      await this.ovelayService.toast({
        message: e.message
      });
    } finally {
      loading.dismiss();
    }
  }
}
