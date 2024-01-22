import { z } from 'zod';
import type { List } from '@prisma/client';

import type { ActionState } from '@/lib/create-safe-action';

import { DeleteList } from './schema';

export type InputType = z.infer<typeof DeleteList>;
export type ReturnType = ActionState<InputType, List>;
