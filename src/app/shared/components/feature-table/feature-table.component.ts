import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Feature } from '@core/types';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-feature-table',
  styleUrls: ['./feature-table.component.scss'],
  templateUrl: './feature-table.component.html',
})
export class FeatureTableComponent {
  public readonly days: number[] = Array(14)
    .fill(0)
    .map((_, i) => i);

  @Input()
  public features: Feature[] | null = null;

  @Input()
  public x: number[][] | null = null;

  @Input()
  public formattedX: string[][] | null = null;

  @Input()
  public weights: object[][] | null = null;
}