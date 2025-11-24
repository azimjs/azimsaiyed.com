# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**IMPORTANT**: Claude Code automatically reads this file at the start of each conversation session as system context. It does not need to be explicitly read during the conversation, but should be updated at the end of sessions with new learnings and corrected assumptions.

## Table of Contents

- [CLAUDE.md](#claudemd)
  - [Table of Contents](#table-of-contents)
  - [Essential Commands](#essential-commands)
    - [Initial Setup](#initial-setup)
    - [Development](#development)
    - [Testing](#testing)
    - [Code Quality](#code-quality)
    - [Build \& Deploy](#build--deploy)
  - [Architecture \& Patterns](#architecture--patterns)
    - [Module-Based Architecture](#module-based-architecture)
    - [Routing Architecture](#routing-architecture)
    - [API Layer Patterns](#api-layer-patterns)
      - [1. Central API Client](#1-central-api-client)
      - [2. Service Layer Pattern](#2-service-layer-pattern)
      - [3. React Query Hooks](#3-react-query-hooks)
    - [State Management](#state-management)
      - [1. Server State - React Query (TanStack Query)](#1-server-state---react-query-tanstack-query)
      - [2. Local State Patterns](#2-local-state-patterns)
    - [Component Patterns](#component-patterns)
      - [1. Page Components](#1-page-components)
      - [2. Form Components](#2-form-components)
    - [Testing Patterns](#testing-patterns)
      - [1. Test Setup](#1-test-setup)
      - [2. API Mocking](#2-api-mocking)
      - [3. Common Test Patterns](#3-common-test-patterns)
    - [Feature Flags](#feature-flags)
    - [Authentication \& Authorization](#authentication--authorization)
    - [Environment Configuration](#environment-configuration)
    - [Code Standards \& Conventions](#code-standards--conventions)
      - [1. File Organization](#1-file-organization)
      - [2. Import Rules](#2-import-rules)
      - [3. TypeScript Requirements](#3-typescript-requirements)
    - [Linting Rules (ESLint Configuration)](#linting-rules-eslint-configuration)
      - [Style \& Formatting](#style--formatting)
      - [TypeScript-Specific](#typescript-specific)
      - [React-Specific](#react-specific)
      - [Import Management](#import-management)
      - [Deprecated/Restricted Imports](#deprecatedrestricted-imports)
      - [Code Quality](#code-quality-1)
      - [Common Violations to Avoid](#common-violations-to-avoid)
      - [Test File Exceptions](#test-file-exceptions)
    - [Common Pitfalls \& Solutions](#common-pitfalls--solutions)
    - [CI/CD Pipeline](#cicd-pipeline)
    - [Monitoring \& Error Tracking](#monitoring--error-tracking)
    - [Key Dependencies](#key-dependencies)
    - [Development Workflow](#development-workflow)
  - [Common Development Workflows](#common-development-workflows)
    - [Adding a New Feature](#adding-a-new-feature)
    - [Working with External Services](#working-with-external-services)
    - [Performance Optimization Patterns](#performance-optimization-patterns)
  - [Debugging Strategies](#debugging-strategies)
    - [Browser DevTools Usage](#browser-devtools-usage)
    - [Common Debugging Approaches](#common-debugging-approaches)
    - [Pull Request Creation](#pull-request-creation)
  - [Troubleshooting](#troubleshooting)
    - [Common Issues and Solutions](#common-issues-and-solutions)
      - [Build/Compilation Errors](#buildcompilation-errors)
      - [Development Server Issues](#development-server-issues)
      - [Test Failures](#test-failures)
  - [Performance Considerations](#performance-considerations)
    - [Bundle Size Optimization](#bundle-size-optimization)
    - [React Performance Patterns](#react-performance-patterns)
  - [Learning and Documentation Maintenance](#learning-and-documentation-maintenance)
    - [Active Documentation Updates](#active-documentation-updates)
    - [What to Document](#what-to-document)
    - [Documentation Process](#documentation-process)
- [important-instruction-reminders](#important-instruction-reminders)
- [CRITICAL REMINDERS FOR COLLECTIVE CODEBASE](#critical-reminders-for-collective-codebase)

## Essential Commands

### Initial Setup

```bash
nvm install                    # Install Node version from .nvmrc
pnpm install                    # Install dependencies
npx husky install             # Enable git hooks for pre-commit checks
pnpm run prestart              # Generate .env file from env_vars.json
```

### Development

```bash
pnpm run start                 # Start dev server at http://localhost:3000
pnpm run serve                 # Preview production build
```

### Testing

```bash
pnpm test                      # Run all tests with coverage
pnpm run test:no-coverage      # Run tests without coverage
pnpm run test:watch            # Run tests in watch mode
pnpm run test:update-snapshots # Update test snapshots

# Run specific tests
vitest run path/to/test.test.tsx
vitest run --grep "test name pattern"
```

### Code Quality

```bash
pnpm run lint                  # Lint all files
pnpm run lint:fix              # Auto-fix linting issues
pnpm run lint:errors           # Show only errors (quiet mode)
pnpm run lint:changed          # Lint only changed files (used in CI)
pnpm run type-check            # TypeScript type checking
pnpm run ts-prune:check        # Find unused exports
```

### Build & Deploy

```bash
pnpm run build                 # Production build (outputs to /build)
```

## Architecture & Patterns

### Module-Based Architecture

The codebase follows a feature-based module structure under `src/modules/`:

- **Auth**: Authentication flows, JWT token management, refresh logic
- **Dashboard**: Member-facing features (Overview, Bookkeeping, Documents, Profile)
- **Tax**: Tax returns, payments, quarterly estimates, tax profile management
- **Payroll**: Payroll management, employee/contractor setup
- **Documents**: Document upload, validation, categorization, search
- **Onboarding**: New member onboarding workflows
- **Hub/HubV2**: Internal staff tools with queue/workspace pattern
- **Funnel**: Public signup flows
- **Settings**: User preferences, bank accounts, profile settings
- **common**: Shared components, utilities, and configurations

### Routing Architecture

- Dual layout system: `LegacyApp` and `NewApp` controlled by `visual_polish_enabled` feature flag
- Main router in `src/modules/App/index.tsx`
- Protected routes require authentication via `AuthContext`
- Lazy loading with retry mechanism for all route components

### API Layer Patterns

#### 1. Central API Client

```typescript
// All API calls use the centralized collectiveApi instance
import collectiveApi from 'modules/common/collectiveApi';

// Automatic auth token injection
// 401 responses trigger logout and redirect to login
// Request/response interceptors for headers and error tracking
```

#### 2. Service Layer Pattern

```typescript
// Services in src/services/{domain}/
// Example: src/services/documents/documents.ts
export const fetchDocuments = async (params) => {
    const response = await collectiveApi.post('/documents/search', params);
    return response.data;
};
```

#### 3. React Query Hooks

```typescript
// Query hooks in modules/{module}/queries/
// Example pattern:
export const useDocuments = (params) => {
    return useQuery({
        queryKey: ['documents', params],
        queryFn: () => fetchDocuments(params),
        // Always specify queryKey for caching
    });
};

// Mutations follow similar pattern
export const useCreateDocumentMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createDocument,
        onSuccess: () => {
            // Invalidate related queries
            queryClient.invalidateQueries({ queryKey: ['documents'] });
        },
    });
};
```

### State Management

#### 1. Server State - React Query (TanStack Query)

- All server data managed via React Query
- Automatic caching, refetching, and synchronization
- Query keys must be unique and include relevant parameters

#### 2. Local State Patterns

- **Auth State**: `AuthContext` with reducer pattern
- **Form State**: Formik with auto-save functionality
- **UI State**: React Context for filters, modals, etc.
- **Feature Flags**: Statsig hooks (`useStatsigGate`)

### Component Patterns

#### 1. Page Components

```typescript
// Pages typically follow this structure:
export default function SomePage() {
    // Feature flag checks
    const isFeatureEnabled = useStatsigGate('feature_name');

    // Data fetching
    const { data, isLoading } = useSomeQuery();

    // Mutations
    const mutation = useSomeMutation();

    // Local state
    const [state, setState] = useState();

    // Effects for side effects
    useEffect(() => {}, []);

    if (isLoading) return <LoadingSkeleton />;
    if (error) return <ErrorState />;

    return <PageContent />;
}
```

#### 2. Form Components

```typescript
// Forms use Formik with Yup validation
<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} enableReinitialize>
    {(formik) => (
        <Form>
            <FormikAutoSave /> // Auto-saves form state
            <TextField name="field" label="Label" />
        </Form>
    )}
</Formik>
```

### Testing Patterns

#### 1. Test Setup

```typescript
// Tests use Vitest with React Testing Library
// Always wrap components with necessary providers
import render from 'tests/utils/render'; // Custom render with providers
import AllTheProviders from 'tests/AllTheProviders';
```

#### 2. API Mocking

```typescript
// Use axios-mock-adapter for API mocks
const mockApi = new MockAxiosAdapter(collectiveApi);
mockApi.onGet('/endpoint').reply(200, responseData);

// Use factories for consistent test data
import { DocumentFactory } from 'modules/Documents/Document.factory';
const document = DocumentFactory.build();
```

#### 3. Common Test Patterns

```typescript
// Test file naming: index.test.tsx (in same folder as component)
// Per .docs/guideline.md - NOT Component.test.tsx
// Mock external dependencies at top of file
vi.mock('modules/common/config');

// Use screen queries for element selection
expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();

// Wait for async operations
await waitFor(() => expect(mutation).toHaveBeenCalled());

// Mock files go in __mocks__ folder
// ComponentName/__mocks__/index.mock.ts
```

### Feature Flags

- **Statsig** for feature flags: `useStatsigGate('flag_name')`
- **Split.io** for A/B testing (legacy, being phased out)
- Flags defined in `src/modules/common/config.ts`
- Local development: Set `VITE_SPLIT_API_KEY=localhost` for all flags on

### Authentication & Authorization

- JWT tokens stored in localStorage
- Refresh token mechanism with automatic retry
- Auth state managed via `AuthContext`
- Protected routes check auth status
- 401 responses trigger automatic logout

### Environment Configuration

- Environment variables prefixed with `VITE_`
- Local env generated from `scripts/env_vars.json`
- Different configs for local/staging/production
- Never commit `.env` files

### Code Standards & Conventions

#### 1. File Organization

```
modules/ModuleName/
├── index.tsx              # Main export
├── Page.tsx               # Page component
├── components/            # Module-specific components
├── queries/               # React Query hooks
├── api/                   # API service functions
├── utils/                 # Module utilities
├── constants.ts           # Module constants
└── ModuleName.test.tsx    # Tests
```

#### 2. Import Rules

- No direct lodash imports: `import debounce from 'lodash/debounce'`
- No moment.js: Use `dayjs` instead
- No semantic-ui: Use Material-UI components
- Absolute imports from `src/` base path

#### 3. TypeScript Requirements

- Strict mode enabled
- All components must have proper types
- No `any` types without justification
- Interfaces for all API responses
- **Props interfaces MUST be named `ComponentNameProps`** (per `.docs/guideline.md`):

    ```typescript
    // ❌ INCORRECT - Generic Props name
    interface Props {
        name: string;
    }
    function MemberCard({ name }: Props) {}

    // ✅ CORRECT - Descriptive interface name
    interface MemberCardProps {
        name: string;
    }
    function MemberCard({ name }: MemberCardProps) {}
    ```

### Linting Rules (ESLint Configuration)

**Key rules to be aware of when coding** (from .eslintrc.js):

#### Style & Formatting

- **Curly braces required** (`curly`) - Always use braces for if/for/while statements
- **Import order** (`import/order`) - Imports must be organized with newlines between groups
- **No file extensions** (`import/extensions`) - Don't include .ts/.tsx extensions in imports
- **Prettier integration** - Code formatting handled automatically

#### TypeScript-Specific

- **@typescript-eslint/no-this-alias** - Avoid `const self = this`, use destructuring instead
- **Airbnb TypeScript rules** - Follow Airbnb's TypeScript style guide
- **Type-aware linting** - Rules that understand TypeScript semantics

#### React-Specific

- **react/jsx-filename-extension** - Only `.jsx` and `.tsx` files can contain JSX
- **react/require-default-props** - Components must have proper default props handling
- **react/jsx-props-no-spreading** - Props spreading is allowed (disabled)
- **React runtime** - Automatic JSX runtime (no need to import React)

#### Import Management

- **import/no-extraneous-dependencies** - Dev dependencies only allowed in test files:
  - `**/*.test.@(js|jsx|ts|tsx)`
  - `**/*.factory.@(js|jsx|ts|tsx)`
  - `**/__mocks__/*.@(js|jsx|ts|tsx)`
  - `**/setupTests.@(js|jsx|ts|tsx)`
  - Config files and test utilities

#### Deprecated/Restricted Imports

- **No direct lodash imports** (`no-restricted-imports`) - Use `import method from 'lodash/method'`
- **Deprecated libraries** (`deprecate/import`):
  - `semantic-ui-react` → use `@mui/material`
  - `moment` → use `dayjs`
  - `statsig-react` → use `@statsig/react-bindings`
- **Deprecated classnames** (`deprecate-classnames`) - No `tw-` prefixed classes or `ui` classes

#### Code Quality

- **no-underscore-dangle** - No leading/trailing underscores in identifiers
- **no-unused-expressions** - Allow short-circuit evaluation (`condition && doSomething()`)
- **no-plusplus** - Allow `++` in for loop afterthoughts only
- **no-restricted-exports** - Cannot export names that conflict with Promises (`then`)

#### Common Violations to Avoid

```typescript
// ❌ Bad - Direct lodash import
import _ from 'lodash';

// ✅ Good - Specific method import
import debounce from 'lodash/debounce';

// ❌ Bad - Missing curly braces
if (condition) doSomething();

// ✅ Good - Always use braces
if (condition) {
    doSomething();
}

// ❌ Bad - Wrong file extension for JSX
// Component.ts containing JSX

// ✅ Good - Correct extension
// Component.tsx containing JSX

// ❌ Bad - Deprecated import
import { Button } from 'semantic-ui-react';

// ✅ Good - Use Material-UI
import { Button } from '@mui/material';
```

#### Test File Exceptions

Test files have relaxed rules for:

- Importing dev dependencies (testing libraries, factories, mocks)
- Using test utilities and setup files
- Factory files for creating test data

### Common Pitfalls & Solutions

1. **Chunk Load Errors**: Handled by `lazyWithSuspenseAndRetry`
2. **Auth Token Expiry**: Automatic refresh via interceptors
3. **Stale Queries**: Use proper query keys and invalidation
4. **Form State Loss**: Use `FormikAutoSave` component
5. **Feature Flag Issues**: Check Statsig initialization

### CI/CD Pipeline

- **GitHub Actions** for CI/CD
- Tests run in parallel across 10 shards
- Required checks: lint, type-check, tests, build
- SonarQube for code quality analysis
- Automatic deployment on merge to staging/master

### Monitoring & Error Tracking

- **DataDog RUM** for performance monitoring
- Errors logged with context via interceptors
- Custom error boundaries for graceful failures

### Key Dependencies

- **React 18** with concurrent features
- **Vite** for fast builds and HMR
- **Material-UI v6** for UI components
- **React Router v5** (not v6 yet)
- **React Query v5** for data fetching
- **Formik** for form management
- **Vitest** for unit testing
- **TypeScript 4.9** with strict mode

### Development Workflow

1. **Before Starting Work**

    - Pull latest from staging branch
    - Run `pnpm install` if package.json changed
    - Check for new environment variables

2. **During Development**

    - Use feature flags for new features
    - Follow existing patterns in the module
    - Write tests for new functionality
    - Check console for warnings/errors

3. **Before Committing**

    - Run `pnpm run lint:fix`
    - Run `pnpm run type-check`
    - Ensure tests pass
    - Husky pre-commit hooks will validate

4. **Creating PRs**
    - PRs against staging branch
    - Include test coverage
    - Update CHANGELOG if needed
    - Link to relevant tickets

## Common Development Workflows

### Adding a New Feature

1. **Create or update components** in appropriate module

    ```bash
    # Create new component file
    touch src/modules/ModuleName/components/NewFeature.tsx
    touch src/modules/ModuleName/components/NewFeature.test.tsx
    ```

2. **Add API service functions** if needed

    ```typescript
    // In src/services/feature/feature.ts
    export const createFeature = async (data: FeatureData) => {
        const response = await collectiveApi.post('/api/features/', data);
        return response.data;
    };
    ```

3. **Create React Query hooks**

    ```typescript
    // In src/modules/ModuleName/queries/feature.ts
    export const useCreateFeatureMutation = () => {
        const queryClient = useQueryClient();
        return useMutation({
            mutationFn: createFeature,
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['features'] });
            },
        });
    };
    ```

4. **Write comprehensive tests**

    ```typescript
    // In NewFeature.test.tsx
    describe('NewFeature', () => {
        it('should create feature successfully', async () => {
            const { user } = renderWithProviders(<NewFeature />);
            await user.click(screen.getByRole('button', { name: /create/i }));
            await waitFor(() => {
                expect(screen.getByText(/success/i)).toBeInTheDocument();
            });
        });
    });
    ```

### Working with External Services

1. **Check for existing integration**

    ```bash
    ls src/services/ | grep service_name
    ```

2. **Create service wrapper**

    ```typescript
    // src/services/serviceName/client.ts
    class ServiceNameClient {
        private apiKey: string;

        constructor(apiKey: string) {
            this.apiKey = apiKey;
        }

        async createResource(data: ResourceData): Promise<Resource> {
            // Implementation
        }
    }
    ```

### Performance Optimization Patterns

1. **Optimize React Query usage**

    ```typescript
    // Use staleTime to reduce refetches
    useQuery({
        queryKey: ['expensive-data'],
        queryFn: fetchExpensiveData,
        staleTime: 5 * 60 * 1000, // 5 minutes
        cacheTime: 10 * 60 * 1000, // 10 minutes
    });
    ```

2. **Implement code splitting**

    ```typescript
    // Lazy load heavy components
    const HeavyComponent = lazyWithSuspenseAndRetry(() => import('./HeavyComponent'));
    ```

3. **Memoize expensive computations**

    ```typescript
    const expensiveValue = useMemo(() => computeExpensiveValue(data), [data]);
    ```

## Debugging Strategies

### Browser DevTools Usage

1. **React DevTools**

    - Inspect component props and state
    - Profile component rendering performance
    - Track context values

2. **Network Tab Analysis**

    - Monitor API calls and responses
    - Check for duplicate requests
    - Analyze payload sizes

3. **Console Debugging**

    ```typescript
    // Temporary debugging (remove before commit)
    console.log('Component render:', { props, state });

    // Use structured logging in development
    if (process.env.NODE_ENV === 'development') {
        console.group('API Response');
        console.log('Status:', response.status);
        console.log('Data:', response.data);
        console.groupEnd();
    }
    ```

### Common Debugging Approaches

1. **React Query DevTools**

    ```typescript
    // Already configured in development
    // Check the floating icon in bottom-right corner
    // View cache state, active queries, and mutations
    ```

2. **Feature Flag Debugging**

    ```typescript
    // Check current feature flag values
    const { client } = useStatsigClient();
    console.log('All gates:', client.getAllGates());
    ```

3. **Performance Profiling**

    ```typescript
    // Use React Profiler API
    import { Profiler } from 'react';

    <Profiler id="Navigation" onRender={onRenderCallback}>
        <Navigation />
    </Profiler>;
    ```

### Pull Request Creation

- **ALWAYS use the template** in `.github/pull_request_template.md` when creating PRs
- **CRITICAL**: PR title format must be `[TICKET-NUMBER] Description In Title Case`
- **CRITICAL**: Use three pound signs (###) for headers, NOT two (##)
- **CRITICAL**: Leave an empty line after each header for proper formatting
- Template includes: Description, What to review, Status checklist, and Ticket Details
- Link to Atlassian ticket in format: `https://collectivehub.atlassian.net/browse/TICKET-NUMBER`
- Use `gh pr create` if GitHub CLI is available, otherwise create manually

## Troubleshooting

### Common Issues and Solutions

#### Build/Compilation Errors

```bash
# Error: Cannot find module
# Solution: Clear cache and reinstall
rm -rf node_modules package-lock.json
pnpm install

# Error: Type errors after dependency update
# Solution: Update type definitions
pnpm install --save-dev @types/package-name@latest
```

#### Development Server Issues

```bash
# Error: Port 3000 already in use
# Solution: Kill process on port
lsof -ti:3000 | xargs kill -9

# Error: ENOSPC: System limit for file watchers
# Solution: Increase watchers limit
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
```

#### Test Failures

```bash
# Error: Snapshots don't match
# Solution: Update snapshots if changes are intentional
pnpm run test:update-snapshots

# Error: Cannot find element
# Solution: Use findBy queries for async elements
const element = await screen.findByRole('button');
```

## Performance Considerations

### Bundle Size Optimization

1. **Analyze bundle size**

    ```bash
    pnpm run build
    # Check build output for chunk sizes
    ```

2. **Lazy load routes and components**

    ```typescript
    const TaxModule = lazyWithSuspenseAndRetry(() => import('modules/Tax'));
    ```

3. **Tree-shake imports**

    ```typescript
    // Bad - imports entire library
    import _ from 'lodash';

    // Good - imports only needed function
    import debounce from 'lodash/debounce';
    ```

### React Performance Patterns

1. **Prevent unnecessary re-renders**

    ```typescript
    // Use React.memo for expensive components
    export default React.memo(ExpensiveComponent);

    // Use useCallback for stable function references
    const handleClick = useCallback(() => {
        // handler logic
    }, [dependency]);
    ```

2. **Virtualize long lists**

    ```typescript
    import { Virtuoso } from 'react-virtuoso';

    <Virtuoso data={items} itemContent={(index, item) => <ListItem item={item} />} />;
    ```

## Learning and Documentation Maintenance

### Active Documentation Updates

**IMPORTANT**: Claude Code should actively update this CLAUDE.md file throughout and at the end of each session with:

1. **Discovered Patterns**: New component patterns, hooks, or architectural decisions found in the codebase
2. **Integration Details**: How frontend integrates with backend APIs, authentication flows, etc.
3. **Performance Insights**: React-specific optimizations, bundle size improvements
4. **Testing Strategies**: New testing patterns, mock strategies, or test utilities discovered
5. **Build/Deploy Updates**: Changes to build process, new environment variables, deployment procedures
6. **UI/UX Patterns**: Consistent patterns for forms, modals, error handling, loading states
7. **State Management Evolution**: Changes in how state is managed (Context, React Query, etc.)

### What to Document

- **Component Patterns**: Reusable patterns for common UI elements
- **Hook Patterns**: Custom hooks and their usage patterns
- **API Integration**: How frontend communicates with backend services
- **Error Handling**: Consistent error handling and user feedback patterns
- **Performance Tricks**: Specific optimizations that improve app performance
- **Testing Helpers**: Useful testing utilities or patterns specific to this codebase
- **Build Quirks**: Any non-standard build configurations or workarounds

### Documentation Process

1. **During Development**: Note any deviations from documented patterns
2. **End of Session**: Update relevant sections with new findings
3. **Include Examples**: Add code snippets for clarity
4. **Keep It Practical**: Focus on information that speeds up future development
5. **Version Awareness**: Note when patterns change with dependency updates

---

**Last Updated**: This is a living document that should be updated with each Claude Code session to reflect the current state of the codebase and development practices.

# important-instruction-reminders

Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (\*.md) or README files. Only create documentation files if explicitly requested by the User.

# CRITICAL REMINDERS FOR COLLECTIVE CODEBASE

1. **ALWAYS** follow `.docs/guideline.md` for component structure and naming
2. **ALWAYS** follow `.docs/theme.md` for all styling - NO EXCEPTIONS
3. **NEVER** use `sx` prop for styling (only for layout properties)
4. **NEVER** use hardcoded colors, spacing, or typography
5. **ALWAYS** use PascalCase folders with index.tsx files
6. **ALWAYS** validate Statsig gates with checkGate()
7. **PR WILL BE REJECTED** if these standards are not followed!
