package org.apache.cordova.FPSPlugin;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.app.Activity;  

import com.futronictech.FtrScanDemoUsbHostActivity;

public class FpsPluging extends CordovaPlugin {
 	 	
	private CallbackContext callbackContext;
	private static final String TEXT="text";
	private String path="";
	@Override
	public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) 
			throws JSONException {
	this.callbackContext = callbackContext;
		if (action.equals("scan")){
		    try {

                      /*  Context context=this.cordova.getActivity().getApplicationContext();
                        Intent intent=new Intent(context,FtrScanDemoUsbHostActivity.class);
			intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK); 
			Log.d("log","before start activity");
                         context.startActivity(intent);	*/
		     //    Log.d("log","after start activity");
			String responseText = "Hello " + args.getString(0);

 		   /* cordova.getActivity().runOnUiThread(new Runnable() {
                          @Override
                      public void run() {
                           Context context = cordova.getActivity()
                                                          .getApplicationContext();
                            Intent intent = new Intent(context, FtrScanDemoUsbHostActivity.class);
					intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                                cordova.getActivity().startActivityForResult(intent,77);
				
                             //callbackContext.error("error: Exception generated");

                        }
                   });
                      */  
                   final CordovaPlugin that =this; 
                   cordova.getThreadPool().execute(new Runnable() {
                          public void run() {
				Context context = cordova.getActivity()
                                                          .getApplicationContext();
                                Intent intent = new Intent(context, FtrScanDemoUsbHostActivity.class);
					//intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                                
				that.cordova.startActivityForResult(that,intent,77);
                        // String responseText = "Hello " + args.getString(0);
                           }
			});
		    } catch (JSONException e){
			callbackContext.error("Failed to parse parameters");
                       
			return false;
		    } catch(Exception e) {
				callbackContext.error("error: Exception generated" +e);
                               
			return false;
		    }
			 PluginResult r = new PluginResult(PluginResult.Status.NO_RESULT);
				r.setKeepCallback(true); 
                               callbackContext.sendPluginResult(r);
			return true;
    
		} else {
			callbackContext.error("error: Invalid action" );
                               PluginResult r = new PluginResult(PluginResult.Status.ERROR);
                               callbackContext.sendPluginResult(r);
			return false;
		}
	
	}

 @Override
    public void onActivityResult(int requestCode, int resultCode, Intent intent) {

	
 //path =intent.getStringExtra("SCAN_RESULT");

	
        if (requestCode ==77 && this.callbackContext != null) {
            if (resultCode == Activity.RESULT_OK) {
                   JSONObject obj = new JSONObject();
                try {
                    obj.put(TEXT, intent.getStringExtra("SCAN_RESULT"));
		
                   // path =intent.getStringExtra("fileUri");
			path =intent.getStringExtra("dataUri");
		callbackContext.success(path);//+">"+intent.getStringExtra("filePath")
                    //obj.put(CANCELLED, false);
                } catch (JSONException e) {
                  //  Log.d(LOG_TAG, "This should never happen");
                }
                //this.success(new PluginResult(PluginResult.Status.OK, obj), this.callback);
               
            }else
		{
		
		  	
			this.callbackContext.success("else");
			
		} 

    }
}
}
