import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {WizardModule} from 'ng2-archwizard';
import {DemoComponent} from './demo/demo.component';
import {BasicModule} from './basic/basic.module';
import {SmallModule} from './small/small.module';
import {LargeFilledModule} from './large-filled/large-filled.module';
import {LargeEmptyModule} from './large-empty/large-empty.module';
import {LargeFilledSymbolsModule} from './large-filled-symbols/large-filled-symbols.module';
import {LargeEmptySymbolsModule} from './large-empty-symbols/large-empty-symbols.module';
import {BasicStepSymbolModule} from './basic-step-symbol/basic-step-symbol.module';
import {CustomStepSymbolModule} from './custom-step-symbol/custom-step-symbol.module';
import {LocationTopModule} from './location-top/location-top.module';
import {LocationBottomModule} from './location-bottom/location-bottom.module';
import {LocationLeftModule} from './location-left/location-left.module';
import {LocationRightModule} from './location-right/location-right.module';
import {CompletionStepBasicModule} from './completion-step-basic/completion-step-basic.module';
import {CompletionStepBackNavigationModule} from './completion-step-back-navigation/completion-step-back-navigation.module';
import {StepEnterEventModule} from './step-enter-event/step-enter-event.module';
import {StepExitEventModule} from './step-exit-event/step-exit-event.module';
import {CustomStepTitlesModule} from './custom-step-titles/custom-step-titles.module';
import {OptionalStepsModule} from './optional-steps/optional-steps.module';
import {ArbitraryStepNavigationModule} from './arbitrary-step-navigation/arbitrary-step-navigation.module';
import {WizardStepDirectivesModule} from './wizard-step-directives/wizard-step-directives.module';
import {ResetWizardModule} from './reset-wizard/reset-wizard.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    WizardModule,
    BasicModule,
    SmallModule,
    LargeFilledModule,
    LargeEmptyModule,
    LargeFilledSymbolsModule,
    LargeEmptySymbolsModule,
    BasicStepSymbolModule,
    CustomStepSymbolModule,
    LocationTopModule,
    LocationBottomModule,
    LocationLeftModule,
    LocationRightModule,
    CompletionStepBasicModule,
    CompletionStepBackNavigationModule,
    StepEnterEventModule,
    StepExitEventModule,
    CustomStepTitlesModule,
    OptionalStepsModule,
    ArbitraryStepNavigationModule,
    WizardStepDirectivesModule,
    ResetWizardModule
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class AppModule { }