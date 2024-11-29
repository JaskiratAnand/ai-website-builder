import { CheckCircle, Circle, Clock } from 'lucide-react';
import { Step } from '../types';

interface StepsListProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (stepId: number) => void;
}

export function StepsList({ steps, currentStep, onStepClick }: StepsListProps) {
  return (
    <div className="bg-neutral-900 rounded-xl shadow-lg p-4 h-full overflow-auto">
      <h2 className="text-lg font-semibold mb-4 text-neutral-100">Build Steps</h2>
      <div className="space-y-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`p-1 rounded-lg cursor-pointer transition-colors ${
              currentStep === step.id
                ? 'bg-neutral-800 border border-neutral-700'
                : 'hover:bg-neutral-800'
            }`}
            onClick={() => onStepClick(step.id)}
          >
            <div className="flex items-center gap-2">
              {step.status === 'completed' ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : step.status === 'in-progress' ? (
                <Clock className="w-5 h-5 text-blue-400" />
              ) : (
                <Circle className="w-5 h-5 text-neutral-600" />
              )}
              <h3 className="font-medium text-neutral-100">{step.title}</h3>
            </div>
            <p className="text-sm text-neutral-400 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}