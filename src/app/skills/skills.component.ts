import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  practices = [
    {
      icon: '🧭',
      tone: 'blue',
      title: 'Understanding the problem',
      description: 'I like working directly with the people who’ll use the software. Understanding their workflow helps me figure out what’s worth building.'
    },
    {
      icon: '🛠️',
      tone: 'teal',
      title: 'Building across the stack',
      description: 'I work on interfaces, services, and the data between them. I stay involved through testing, launch, and production support.'
    },
    {
      icon: '✨',
      tone: 'violet',
      title: 'Working with AI',
      description: 'I use AI agents throughout development and am comfortable with LLMs, prompt design, and multi-step workflows. They help me move faster; I still review, test, and own the result.'
    }
  ];
  toolkit = [
    { label: 'Languages', value: 'Scala, Java, Python, SQL, TypeScript, C++' },
    { label: 'Applications & data', value: 'Spring Boot, Angular, React, MongoDB, Kafka' },
    { label: 'AI development', value: 'LLMs, AI agents, prompt design, Prompt Flow' },
    { label: 'Delivery & infrastructure', value: 'Docker, Linux, Git, Jenkins, AWS, Jira' }
  ];
}
