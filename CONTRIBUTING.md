# 🤝 Contributing to Mamacita

Thank you for your interest in contributing to Mamacita! This document provides guidelines for contributing to the project.

## 📜 Code of Conduct

- Be respectful and inclusive
- Use warm, empathetic language (remember: we're building for mothers!)
- Provide constructive feedback
- Focus on what's best for the community

## 🌿 Development Workflow

### 1. Branch Strategy

```
main           # Production-ready code
├── develop    # Integration branch
├── feature/*  # New features
├── fix/*      # Bug fixes
└── docs/*     # Documentation updates
```

### 2. Creating a Feature

```bash
# Pull latest code
git checkout develop
git pull origin develop

# Create feature branch
git checkout -b feature/pregnancy-symptom-tracker

# Make changes, commit often
git add .
git commit -m "feat: add symptom logging UI"

# Push to remote
git push origin feature/pregnancy-symptom-tracker

# Create Pull Request on GitHub
```

### 3. Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: fix a bug
docs: documentation changes
style: code formatting (no logic change)
refactor: code refactoring
test: adding tests
chore: maintenance tasks
```

**Examples:**
```
feat(pregnancy): add weekly milestone notifications
fix(auth): resolve login token expiration issue
docs: update API endpoint documentation
refactor(community): optimize post feed query
```

## 🧪 Testing Requirements

### Before Submitting PR

- [ ] All existing tests pass
- [ ] New features have tests
- [ ] Manual testing completed
- [ ] No console errors/warnings
- [ ] Code linted and formatted

```bash
# Run tests
npm run test:all

# Lint code
npm run lint:all

# Format code
cd backend && npm run format
cd mobile && npm run format
cd admin && npm run format
```

## 📝 Pull Request Process

### PR Checklist

- [ ] Branch is up-to-date with `develop`
- [ ] Tests pass
- [ ] Code is linted and formatted
- [ ] Documentation updated (if needed)
- [ ] Screenshots included (for UI changes)
- [ ] Breaking changes documented

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Breaking change
- [ ] Documentation update

## Testing
How was this tested?

## Screenshots (if applicable)
Add screenshots for UI changes

## Related Issues
Closes #123
```

## 🏗️ Code Style Guide

### JavaScript

- Use ES6+ features
- Prefer `const` over `let`, avoid `var`
- Use async/await over promises
- Use destructuring when possible
- Meaningful variable names

```javascript
// ✅ Good
const { fullName, email } = user;
const isPregnant = pregnancy.status === 'ACTIVE';

// ❌ Avoid
var data = user.fullName;
let x = pregnancy.status === 'ACTIVE';
```

### React/React Native

- Functional components only
- Use hooks
- Keep components small and focused
- Extract reusable logic to custom hooks

```javascript
// ✅ Good
function PregnancyCard({ pregnancy }) {
  const currentWeek = useCurrentWeek(pregnancy.dueDate);

  return <View>...</View>;
}

// ❌ Avoid
class PregnancyCard extends React.Component {
  render() {
    return <View>...</View>;
  }
}
```

### File Naming

- **Components:** PascalCase (`PregnancyCard.js`)
- **Utilities:** camelCase (`dateHelpers.js`)
- **Routes:** kebab-case (`pregnancy.routes.js`)
- **Constants:** UPPER_SNAKE_CASE (`API_ENDPOINTS.js`)

## 🌸 UX Guidelines

Remember our core UX principles:

### 1. Emotional Safety
- Use warm, supportive language
- Avoid clinical/medical jargon
- Be sensitive to difficult topics (pregnancy loss, etc.)

```javascript
// ✅ Good
"Estamos aqui para você em cada momento 💜"

// ❌ Avoid
"Patient data updated successfully"
```

### 2. Low Cognitive Load
- Keep UI simple and uncluttered
- One primary action per screen
- Clear, concise copy

### 3. Human Language
- Write like you're talking to a friend
- Use "você" not "usuário"
- Empathetic error messages

```javascript
// ✅ Good
"Ops! Não conseguimos salvar suas informações. Tente novamente?"

// ❌ Avoid
"Error 500: Internal server error"
```

## 🔐 Security Guidelines

- Never commit `.env` files
- Don't log sensitive data
- Sanitize all user inputs
- Use parameterized queries (Prisma does this)
- Validate all API inputs

## 📚 Documentation

When adding features, update:

- Code comments (for complex logic)
- API documentation (if adding endpoints)
- README.md (if changing setup)
- ARCHITECTURE.md (if changing structure)

## 🎯 Focus Areas for Contributors

### High Priority (MVP)
- Authentication flows
- Pregnancy tracking UI
- Community features
- Classes & video player
- Events system

### Medium Priority (Phase 2)
- Payments integration
- Marketplace
- Direct messages
- WebSockets

### Low Priority (Phase 3)
- AI features
- International expansion

## 🙋 Getting Help

- **Questions:** Open a [Discussion](https://github.com/your-org/mamacita/discussions)
- **Bugs:** Create an [Issue](https://github.com/your-org/mamacita/issues)
- **Chat:** Join our Discord (link TBD)

## 🎉 Recognition

Contributors will be:
- Listed in README.md
- Mentioned in release notes
- Invited to contributor meetings

---

Thank you for helping build something special for mothers! 💜
