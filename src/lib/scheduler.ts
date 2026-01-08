/**
 * Scheduler utility for breaking up long tasks
 * Helps reduce Total Blocking Time (TBT) by yielding to the main thread
 */

/**
 * Yields control back to the main thread
 * Use this in long-running loops or computations to prevent blocking
 */
export async function yieldToMain(): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, 0);
    });
}

/**
 * Process items in batches with yielding between batches
 * @param items Array of items to process
 * @param processor Function to process each item
 * @param batchSize Number of items to process before yielding (default: 10)
 */
export async function processBatched<T>(
    items: T[],
    processor: (item: T, index: number) => void | Promise<void>,
    batchSize: number = 10
): Promise<void> {
    for (let i = 0; i < items.length; i++) {
        await processor(items[i], i);

        // Yield every batchSize items
        if ((i + 1) % batchSize === 0) {
            await yieldToMain();
        }
    }
}

/**
 * Simple task queue that processes tasks with yielding
 * Useful for breaking up initialization work
 */
export class TaskQueue {
    private tasks: Array<() => void | Promise<void>> = [];
    private isProcessing = false;

    add(task: () => void | Promise<void>) {
        this.tasks.push(task);
        if (!this.isProcessing) {
            this.process();
        }
    }

    private async process() {
        this.isProcessing = true;

        while (this.tasks.length > 0) {
            const task = this.tasks.shift();
            if (task) {
                await task();
                await yieldToMain();
            }
        }

        this.isProcessing = false;
    }
}
