import { ACADEMY_DATA } from './data/academy_data';

for (const module of ACADEMY_DATA) {
  for (const topic of module.topics) {
    if (topic.quiz && topic.quiz.length < 10) {
      console.log(`Topic: ${topic.title} - ${topic.quiz.length} questions`);
    }
  }
}
