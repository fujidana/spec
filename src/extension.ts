// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {SpecBuiltinProvider as provider} from './specProvider';

// this method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
	const builtinProvider = new provider(context.asAbsolutePath('./syntaxes/spec.apiReference.json'));
	const selector = { scheme: '*', language: 'spec' };
	context.subscriptions.push(
		vscode.languages.registerCompletionItemProvider(selector, builtinProvider),
		vscode.languages.registerSignatureHelpProvider(selector, builtinProvider, '(', ')', ','),
		vscode.languages.registerHoverProvider(selector, builtinProvider)
	);
}

// this method is called when your extension is deactivated
export function deactivate() { }
